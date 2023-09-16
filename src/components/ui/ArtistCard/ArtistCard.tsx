import React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "../Card";
import { ArtistCardElement } from "./types";


type ArtistCardComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement>;

// Merge the props
type MergedProps = ArtistCardElement & ArtistCardComponentProps;

export const ArtistCard: React.FC<MergedProps> = ({
  artistName,
  imageUrl,
  icons,
  ...rest
}) => {
  return (
    <Card {...rest} tabIndex={0} className="container w-60">
      <CardContent className="">
        {imageUrl && <img className="card-image" src={imageUrl} alt={artistName} />}
      </CardContent>
      <div className="container text-center card-image">
        <CardDescription className="pt-6 pb-4">{artistName.toUpperCase()}</CardDescription>
        <CardFooter className="flex justify-center gap-2">
          {icons.map((el, index) => (
            React.cloneElement(el as React.ReactElement, {
              className: 'w-4',
              key: index,
            })
          ))}
        </CardFooter>
      </div>
    </Card>
  );
};
