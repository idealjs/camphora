/* eslint-disable react/jsx-key */
import Bottom from "./Bottom";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";
import Left from "./Left";
import Right from "./Right";
import Top from "./Top";
import TopLeft from "./TopLeft";
import TopRight from "./TopRight";

interface IProps {
  componentId: string;
}

const EditBox = (props: IProps) => {
  const { componentId } = props;
  return [
    <Top componentId={componentId} />,
    <Bottom componentId={componentId} />,
    <Left componentId={componentId} />,
    <Right componentId={componentId} />,
    <TopLeft componentId={componentId} />,
    <TopRight componentId={componentId} />,
    <BottomLeft componentId={componentId} />,
    <BottomRight componentId={componentId} />,
  ];
};

export default EditBox;
