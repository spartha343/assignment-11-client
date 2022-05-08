import React from 'react';
import logo from '../../logo.gif'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const signout = () => {
        signOut(auth).then(() => {
            console.log('sign out');
        }).catch((error) => {
            // An error happened.
        });
    }
    return (

        <Navbar bg="light" expand="lg" sticky="top" >
            <Container fluid className='container'>
                <Navbar.Brand as={Link} to={'/'}><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/allitems"}>Manage Items</Nav.Link>
                        <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>

                        {
                            user ? <>
                                <Nav.Link as={Link} to={"/myitem"}>My Item</Nav.Link>
                                <Nav.Link as={Link} to={"/addMyItem"}>Add My Item</Nav.Link>
                                <Nav.Link as={Link} to={"/addItem"}>Add Item</Nav.Link>
                            </>
                            : ""
    
                        }



                    </Nav>
                    {
                        user ?
                            <Button onClick={signout}>Sign Out</Button>
                            :

                            <Nav.Link className='btn btn-primary text-white' as={Link} to={"/login"}>Login / Sign up</Nav.Link>

                    }

                    {/* Manage Items, Add Item, My items, Logout */}

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;