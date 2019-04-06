import useLever from './useLever';

export default function Lever(props) {
  const { children, feature, ...options } = props;
  const isEnabled = useLever(feature, options);
  if (isEnabled) return children;
  return null;
}
