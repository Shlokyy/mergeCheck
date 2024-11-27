import React, { useState } from 'react';

function Menu() {

const menuData = [
    {
        menuName : "menu1",
        id : 1
    },
    {
        menuName : "menu2",
        id : 2
    },
    {
        menuName : "menu3",
        id : 3
    }
]

const subMenuData = [
    {
        subMenuName : "subMenu1",
        id : 11
    },
    {
        subMenuName : "subMenu2",
        id : 22
    },
    {
        subMenuName : "subMenu3",
        id : 33
    }
]

const formData = [
    {
        menuName : "subMenu1",
        id : 11
    },
    {
        menuName : "subMenu2",
        id : 22
    },
    {
        menuName : "subMenu3",
        id : 33
    }
]

  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleToggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const handleToggleForm = (formName) => {
    setShowForm(formName);
  };

  return (
    <div className="menu">
      <ul>
        <li>
          <a href="#" onClick={() => handleToggleSubmenu()} className={`dropdown ${showSubmenu ? 'is-active' : ''}`}>
            Menu Item 1
            <i className="fas fa-angle-down"></i>
          </a>
          {showSubmenu && (
            <ul className="submenu">
              <li>
                <a href="#" onClick={() => handleToggleForm('form1')} className={`${showForm === 'form1' ? 'is-active' : ''}`}>
                  Form Name 1
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleToggleForm('form2')} className={`${showForm === 'form2' ? 'is-active' : ''}`}>
                  Form Name 2
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" className={`dropdown ${showSubmenu ? 'is-active' : ''}`}>
            Menu Item 2
            <i className="fas fa-angle-down"></i>
          </a>
        </li>
      </ul>
      {showForm && (
        <form className="form" name={showForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
}

export default Menu;