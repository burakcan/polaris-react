import React from 'react';

export interface PolarisContainerProps {
  ref?: React.Ref<HTMLDivElement>;
}

export function PortalsContainer({ref}: PolarisContainerProps) {
  return <div id="PolarisPortalsContainer" ref={ref} />;
}
