import React, {FunctionComponent} from 'react';
import styles from './mainActivityLinks.module.scss';
import {Link} from 'gatsby';

interface MainActivityLinksProps {
  readonly mainActivities: string[];
}

function MainActivityLinks({
  mainActivities,
}: MainActivityLinksProps): JSX.Element {
  return (
    <div className={styles.container}>
      {mainActivities.map((activity) => (
        <Link key={activity} className={styles.link} to={`/${activity}`}>
          {activity}
        </Link>
      ))}
    </div>
  );
}

export default MainActivityLinks;
