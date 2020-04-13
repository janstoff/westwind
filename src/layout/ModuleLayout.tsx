import React from 'react';

import styles from './module-layout.module.scss';

export interface SectionProps {
  id: string;
  children: any;
}

const ModuleLayout = ({id, children}: SectionProps) => (
  <section id={id} className={styles.section}>
    {children}
  </section>
);

export default ModuleLayout;
