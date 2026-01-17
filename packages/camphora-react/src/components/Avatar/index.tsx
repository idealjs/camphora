import { avatar, avatarImg } from "@idealjs/camphora-styled";
import clsx from "clsx";

interface IProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  className?: string;
  onImgError?: React.ReactEventHandler<HTMLImageElement>;
}

const Avatar = ({ src, alt, fallback, className, onImgError, ...rest }: IProps) => {
  const hasSrc = Boolean(src);

  return (
    <div className={clsx(avatar, className)} {...rest}>
      {hasSrc ? (
        <img
          src={src}
          alt={alt}
          className={avatarImg}
          onError={(e) => onImgError?.(e)}
        />
      ) : (
        fallback
      )}
    </div>
  );
};

export default Avatar;
