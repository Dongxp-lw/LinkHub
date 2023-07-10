import styles from './style/index.scss';
export default ({iconName}:{iconName:string}) => (
  <svg className={styles.iconfont} aria-hidden="true">
    <use xlinkHref={iconName}></use>
  </svg>
);
