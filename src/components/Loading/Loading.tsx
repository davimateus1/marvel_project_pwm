import ReactLoading, { LoadingType } from "react-loading";

type LoadingProps = {
  type?: LoadingType;
  color: string;
};

export const Loading = ({ type, color }: LoadingProps) => (
  <ReactLoading type={type} color={color} height={100} width={100} />
);
