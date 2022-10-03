import React from "react";
import { Link } from "react-router-dom";
// import styled from 'styled-components';

function Header() {
  return (
    <Header class="Header Header--top">
      <div
        class="Header-inner Header-inner--top"
        data-nc-group="top"
        data-nc-collapse=""
      >
        <div data-nc-container="top-left">
          <nav
            class="Header-nav Header-nav--primary"
            data-nc-element="primary-nav"
            data-content-field="navigation"
          >
            <div class="Header-nav-inner">
              <a
                href="/"
                class="Header-nav-item Header-nav-item--active"
                data-test="template-nav"
              >
                Home
              </a>
              <span class="Header-nav-item Header-nav-item--folder">
                <a
                  href="/about"
                  class="Header-nav-folder-title"
                  data-controller="HeaderNavFolderTouch"
                  data-controllers-bound="HeaderNavFolderTouch"
                >
                  About
                </a>

                <span class="Header-nav-folder">
                  <a
                    href="/artists"
                    class="Header-nav-folder-item"
                    data-test="template-nav"
                  >
                    Artists
                  </a>

                  <a
                    href="/tshirt/styles"
                    class="Header-nav-folder-item"
                    data-test="template-nav"
                  >
                    Styles
                  </a>

                  {/* <a
                    href="/in-the-news"
                    class="Header-nav-folder-item"
                    data-test="template-nav"
                  >
                    In The News
                  </a> */}
                </span>
              </span>
              <span class="Header-nav-item Header-nav-item--folder">
                <a
                  href="/artists"
                  class="Header-nav-folder-title"
                  data-controller="HeaderNavFolderTouch"
                  data-controllers-bound="HeaderNavFolderTouch"
                >
                  Donate
                </a>
                </span>
            </div>
          </nav>
        </div>
        <div data-nc-container="top-center">
          <a
            href="/"
            class="Header-branding"
            data-nc-element="branding"
            data-content-field="site-title"
          >
            <img
              src="/Users/carolinecerussi/Desktop/megamood/megamood/public/images/MEGAMOODlogo.jpeg"
              alt="MegaMood"
              class="Header-branding-logo"
            />
          </a>
        </div>
        <div data-nc-container="top-right">
          <nav
            class="Header-nav Header-nav--secondary"
            data-nc-element="secondary-nav"
            data-content-field="navigation"
          >
                            
  <div class="Header-nav-inner">
    {/* <a href="/about" class="Header-nav-item"><big>Cart</big></a><a href="https://secure.givelively.org/donate/the-artist-co-op" target="_blank" class="Header-nav-item"><big>MAKE A <br> DONATION </big></a> */}
  </div>
          </nav>
        </div>
      </div>
    </Header>
  );
}

export default Header;
