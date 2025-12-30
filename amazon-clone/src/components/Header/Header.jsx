import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  MdLocationOn,
  MdSearch,
  MdMenu,
} from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import classes from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider.jsx";
import { auth } from "../../Utility/firebase";

const Header = () => {
  const [{ user, basket = [] }] = useContext(DataContext);

  const totalItems = basket?.reduce(
    (amount, item) => amount + item.amount,
    0
  );

  return (
    <>
      {/* TOP HEADER */}
      <header className={classes.header}>
        {/* LEFT */}
        <div className={classes.left}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon"
              className={classes.logo}
            />
          </Link>

          <div className={classes.location}>
            <MdLocationOn />
            <div>
              <p>Germany</p>
              <span>Update location</span>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className={classes.search}>
          <select>
            <option>All</option>
          </select>
          <input placeholder="Search Amazon.de" />
          <button>
            <MdSearch size={22} />
          </button>
        </div>

        {/* RIGHT */}
        <div className={classes.right}>
          {/* Language */}
          <div className={classes.lang}>
            🇺🇸 <span>EN</span>
          </div>

          {/* Account */}
          <Link to={!user ? "/Auth" : "#"} className={classes.account}>
            {user ? (
              <>
                <p>Hello, {user.email.split("@")[0]}</p>
                <span onClick={() => auth.signOut()}>Sign Out</span>
              </>
            ) : (
              <>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </>
            )}
          </Link>

          {/* Orders */}
          <Link to="/orders" className={classes.orders}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={classes.cart}>
            <FiShoppingCart size={26} />
            <span className={classes.count}>{totalItems}</span>
            <span>Shopping Basket</span>
          </Link>
        </div>
      </header>

      {/* SUB NAV */}
      <nav className={classes.subNav}>
        <div className={classes.menu}>
          <MdMenu size={22} />
          <span>All</span>
        </div>

        <ul>
          <li>Amazon Haul</li>
          <li>Best Sellers</li>
          <li>New Releases</li>
          <li>Amazon Basics</li>
          <li>Today's Deals</li>
          <li>Books</li>
          <li>Fashion</li>
        </ul>

        <p className={classes.promo}>Holiday-Gifts</p>
      </nav>
    </>
  );
};

export default Header;