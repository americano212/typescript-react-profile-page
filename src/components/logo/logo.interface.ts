export interface LogoProps extends LogoIconProps, LogoImageProps {
  link: string;
  handle: string;
  isDisplay?: boolean;
}

export interface LogoIconProps {
  backgroundColor: string;
  paddingTop?: string;
} 

export interface LogoImageProps{
  filePath: string;
  name: string;
  imageSize?: number;
}