import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import {PAGES} from '../config';

import styles from './navigationMenu.module.scss';
import LocalizedLink from './LocalizedLink';
import {PageStyle} from '../layout/App';

interface NavigationMenuProps {
  readonly pageStyle: PageStyle;
}

class NavigationMenu extends React.Component<NavigationMenuProps> {
  state = {
    menuOpen: false
  };

  private handleMenuClick(): void {
    this.setState(() => ({
      menuOpen: this.state.menuOpen ? false : true
    }));
  }

  private handleMenuHover(): void {
    this.setState(() => ({
      menuOpen: true
    }));
  }

  private handleMenuClose(): void {
    this.setState(() => ({
      menuOpen: false
    }));
  }

  private renderPageLinks(
    pages: string[],
    pageStyle: PageStyle
  ): JSX.Element | null {
    if (this.state.menuOpen) {
      return (
        <ul
          className={
            pageStyle === 'home' ? styles.homeMenuList : styles.defaultMenuList
          }
          onMouseLeave={() => this.handleMenuClose()}
        >
          {pages.map(page => (
            <LocalizedLink key={page} to={`/${page === 'home' ? '' : page}`}>
              <Translated id={`${page}-menu-entry`} />
            </LocalizedLink>
          ))}
        </ul>
      );
    }
    return null;
  }

  public render(): JSX.Element {
    return (
      <div
        className={
          this.props.pageStyle === 'home'
            ? styles.homeMenuContainer
            : styles.defaultMenuContainer
        }
      >
        <button
          className={styles.menuButton}
          onMouseEnter={() => this.handleMenuHover()}
          onClick={() => this.handleMenuClick()}
        >
          <img
            src={require(`../styling/icons/menu${
              this.props.pageStyle === 'home' ? '-white.svg' : '-brown.svg'
            }`)}
            alt="Menu"
          />
        </button>
        {this.renderPageLinks(PAGES, this.props.pageStyle)}
      </div>
    );
  }
}

export default NavigationMenu;
