import { useTrail, a } from "react-spring";
import React from "react";

function StaggeredName({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 280, friction: 120 },
    opacity: open ? 1 : 0,
    x: open ? 0 : props.start,
    from: { opacity: 0, x: props.start },
  });
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate(${x}px,0)`),
            }}
          >
            <a.div>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default StaggeredName;
