import React from 'react';
import { Link } from 'dva/router';
import './index.less';

export default class ZwLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          path: '/all',
          title: '首页',
        },  {
          path: '/good',
          title: '精华',
        }, {
          path: '/share',
          title: '分享',
        }, {
          path: '/ask',
          title: '问答',
        }, {
          path: '/job',
          title: '招聘',
        },
      ],
      activeIndex: 0,
    }
  }

  handleClick = (activeIndex) => {
    this.setState({
      activeIndex,
    });
  }

  render() {
    const { activeIndex, links } = this.state;
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="header-limit">
            <span className="node-title">CNodeJs社区</span>

            <div className="container">
              <div className="collapse navbar-collapse" id="menu">
                <ul className="nav navbar-nav">
                  {
                    links.map((d, i) =>
                      <li className={`${i === activeIndex ? 'active' : ''}`} key={i} onClick={() => this.handleClick(i)}>
                        <Link to={`/home${d.path}`}>{d.title}</Link>
                      </li>)
                  }
                </ul>

                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="/">
                      <span className="menu-text">退出</span>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </nav>

        {this.props.children}
      </div>
    )
  }
}