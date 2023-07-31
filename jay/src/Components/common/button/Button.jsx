import styles from './Button.module.css';
function Button(props) {
  return <button data-testid="common-button"    
  className={styles.button}
  onClick={props.onClick}
  disabled={props.disabled}>
    {props.text}</button>;
}

export default Button;