import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('./', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name: string;
} & React.SVGAttributes<SVGElement>;

const Icon = (props: Props) => (
  <svg>
    <use xlinkHref={`#${props.name}`} />
  </svg>
);

export default Icon;
