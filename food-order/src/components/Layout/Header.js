// images
import mealsImage from '../../assets/meals.jpg';

// css
import classes from './Header.module.css';

const Header = () => { // stop

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}

export default Header;