import React, {FunctionComponent} from 'react';
import styles from './socialIcons.module.scss';
import {PageStyle} from '../layout/App';

interface SocialLink {
  readonly name: string;
  readonly iconName: string;
  readonly linkTo: string;
}

interface SocialLinksProps {
  readonly socialLinks: SocialLink[];
  readonly pageStyle: PageStyle;
}

const SocialLinks: FunctionComponent<SocialLinksProps> = ({
  socialLinks,
  pageStyle
}: SocialLinksProps) => (
  <div className={styles.container}>
    {socialLinks.map(socialLink => (
      <a
        key={socialLink.name}
        className={styles.socialIcon}
        href={socialLink.linkTo}
      >
        <img
          src={require(`../styling/icons/${socialLink.iconName}${
            pageStyle === 'home' ? '-white.svg' : '-brown.svg'
          }`)}
          alt={`${socialLink.name}`}
        />
      </a>
    ))}
  </div>
);

export default SocialLinks;
