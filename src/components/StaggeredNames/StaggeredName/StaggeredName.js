import { useTrail, a } from "react-spring";
import React from "react";

function StaggeredName({ open, children, ...props }) {
  const direction = (type, x) => {
    switch (type) {
      case "vertical":
        return x.interpolate((x) => `translate(0,${x}px)`);
      case "horizontal":
        return x.interpolate((x) => `translate(${x}px,0)`);
      case "inplace":
        return x.interpolate((x) => `translate3d(${x}px,0,0)`);
      default:
        return null;
    }
  };
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    delay: props.delay,
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : props.start,
    height: open ? 85 : 0,
    from: { opacity: 0, x: props.start, height: 0 },
  });
  return (
    <div {...props}>
      <div style={props.row ? { display: "flex" } : {}}>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={`${items[index]}-${index}`}
            className="trails-text"
            style={{
              ...rest,
              transform: direction(props.type, x),
              //   props.vertical
              // ? x.interpolate((x) => `translate(0,${x}px)`)
              // : x.interpolate((x) => `translate(${x}px,0)`),
            }}
          >
            <a.div style={props.withheight ? { height } : {}}>
              {items[index]}
            </a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default StaggeredName;
