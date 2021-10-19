import React from 'react';
import '../../styles/bootstrap-italia.min.css';

const Header = () => (
  <div class="it-header-slim-wrapper" data-testid="Header">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="it-header-slim-wrapper-content">
        <a class="d-none d-lg-block navbar-brand" href="#">Team Digitale</a>
          <div class="nav-mobile">
            <nav>
              <div class="link-list-wrapper collapse" id="menu2">
                <ul class="link-list">
                  <li><a class="list-item" href="#">Chi Siamo</a></li>
                  <li><a class="list-item active" href="#">Documentazione</a></li>
                </ul>
              </div>
            </nav>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
