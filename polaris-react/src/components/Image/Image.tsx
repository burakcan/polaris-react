import React, {useCallback} from 'react';

interface SourceSet {
  source: string;
  descriptor?: string;
}

type CrossOrigin = 'anonymous' | 'use-credentials' | '' | undefined;

export interface ImageProps extends React.HTMLProps<HTMLImageElement> {
  alt: string;
  source: string;
  crossOrigin?: CrossOrigin;
  sourceSet?: SourceSet[];
  onLoad?(): void;
  onError?(): void;
  ref?: React.Ref<HTMLImageElement>;
}

export function Image({alt, sourceSet, source, crossOrigin, onLoad, className, ref, ...rest}: ImageProps) {
  const finalSourceSet = sourceSet
    ? sourceSet
        .map(
          ({source: subSource, descriptor}) => `${subSource} ${descriptor}`,
        )
        .join(',')
    : null;

  const handleLoad = useCallback(() => {
    if (onLoad) onLoad();
  }, [onLoad]);

  return (
    <img
      ref={ref}
      alt={alt}
      src={source}
      crossOrigin={crossOrigin}
      className={className}
      onLoad={handleLoad}
      {...(finalSourceSet ? {srcSet: finalSourceSet} : {})}
      {...rest}
    />
  );
}
