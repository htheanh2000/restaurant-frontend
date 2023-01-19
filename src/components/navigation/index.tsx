import Icon from "../icon";

type TProps = {
  className?: string;
};

const Navigation = (props: TProps) => {
  const { className = "" } = props;
  return (
    <div className={`flex ${className}`}>
      <div className="w-12 h-12 cursor-pointer rounded-xl bg-brown text-white flex items-center justify-center mx-2">
        <Icon name="left" />
      </div>
      <div className="w-12 cursor-pointer  h-12 rounded-xl bg-orange/20 text-orange flex items-center justify-center mx-2">
        1
      </div>
      <div
        className="w-12 cursor-pointer h-12 rounded-xl bg-orange/20 text-orange flex items-center justify-center mx-2"
      >
        2
      </div>
      <div className="w-12 cursor-pointer h-12 rounded-xl bg-orange/20 text-orange flex items-center justify-center mx-2">
        3
      </div>
      <div className="w-12 cursor-pointer h-12 flex items-center justify-center mx-2">
        <Icon name="ellipses" />
      </div>
      <div className="w-12 h-12 cursor-pointer rounded-xl bg-brown text-white flex items-center justify-center mx-2">
        <Icon name="right" />
      </div>
    </div>
  );
};

export default Navigation;
