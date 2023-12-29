import './css/ac.css'

import React from "react";

import { Card, CardContent, CardDescription, CardFooter } from "../Card";
import { ArtistCardElement } from "./types";
import { FacebookIcon, InstagramIcon, TwitterIcon, Music2Icon } from 'lucide-react';

type ArtistCardComponentProps = React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>;

// Merge the props
type MergedProps = ArtistCardElement & ArtistCardComponentProps;

const hashmap: Record<string, React.ReactNode> = {
 'TwitterIcon': <TwitterIcon size={24} fill="var(--space-cadet)" color="var(--space-cadet)"/> ,
 'InstagramIcon': <InstagramIcon size={24} fill="transparent" color="var(--space-cadet)"/>,
 'FacebookIcon': <FacebookIcon size={24} fill="var(--space-cadet)" color="var(--space-cadet)"/>,
 'TikTokIcon': <Music2Icon size={24} fill="transparent" color="var(--space-cadet)"/>,
}

export const ArtistCard: React.FC<MergedProps> = ({
  artistName,
  imageUrl,
  icons,
  artistWebsite,
  ...rest
}) => {
  return (
    <Card {...rest} tabIndex={0} className="container w-60">
      <CardContent className="image-overlay">
        {imageUrl && <img className="hover:cursor-emerald-24 card-image" src={imageUrl} alt={artistName} 
        onClick={
          !artistWebsite ? () => {} : () => window.open(artistWebsite, '_blank')
        } />}
      </CardContent>
      <div className="container text-center card-image">
        <CardDescription className="hover:cursor-emerald-24 pt-6 pb-4">{artistName.toUpperCase()}</CardDescription>
        <CardFooter className="flex justify-center gap-4">
          { 
            icons.map((el, index) => {
              const { icon, iconLink } = el;
              const iconElement = hashmap[icon as string];
              return (
                React.cloneElement(iconElement as React.ReactElement, {
                  className: 'hover:cursor-emerald-24',
                  key: index,
                  onClick: () => {
                    window.open(iconLink, '_blank');
                  }})
              );
            })
          }
        </CardFooter>
      </div>
    </Card>
  );
};
