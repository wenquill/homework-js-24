import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { clearAuthError } from '../../store/slices/authSlice';
import CONSTANTS from '../../constants';
import { column1, column2 } from './data';
import ArticleQuestions from './ArticleQuestions/ArticleQuestions';

const RegistrationPage = props => {
  props.clearError();

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <div className={styles.headerSignUpPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} />
          <div className={styles.linkLoginContainer}>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </div>
        </div>
        <RegistrationForm history={props.history} />
      </div>
      <div className={styles.footer}>
        <div className={styles.articlesMainContainer}>
          <div className={styles.ColumnContainer}>
            {column1.map(item => (
              <ArticleQuestions article={item}/>
            ))}
          </div>
          <div className={styles.ColumnContainer}>
            {column2.map(item => (
              <ArticleQuestions article={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearAuthError()),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
