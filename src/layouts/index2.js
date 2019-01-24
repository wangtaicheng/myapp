import {Component} from 'react';
import withRouter from 'umi/withRouter';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import styles from './index.css';

class Layout extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      <TransitionGroup>
        <CSSTransition key={this.props.location.pathname} classNames="fade" timeout={300}>
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    </div>
  };

}

// export default withRouter(
//   ({children, location}) =>
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to umi!</h1>
//       <TransitionGroup>
//         <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
//           {children}
//         </CSSTransition>
//       </TransitionGroup>
//     </div>
// )

export default withRouter(Layout);
