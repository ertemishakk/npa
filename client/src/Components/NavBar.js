import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    Button
} from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu'
import kangaroo from '../images/kangaroo.png'
// import ScrollspyNav from "react-scrollspy-nav";

class NavBar extends Component {
    state = {
        isOpen: false,
        offsetY: 0,
        slide: 0,
        lastScrollY: 0,
        windowWidth: 0
    }
    componentDidMount() {
        this.setState({
            windowWidth: window.innerWidth,
        })
        window.addEventListener('resize', this.updateWindowDimension);
        window.addEventListener('scroll', this.listenToScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimension);
        window.removeEventListener('scroll', this.listenToScroll)

    }
    updateWindowDimension = (e) => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }


    listenToScroll = () => {
        this.setState({
            offsetY: window.pageYOffset
        })
        const { lastScrollY } = this.state;
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            this.setState({ slide: '-100px' });
        } else {
            this.setState({ slide: '0px' });
        }
        this.setState({ lastScrollY: currentScrollY });
    }

    toggle = (e) => {
        if (this.state.innerWidth !== null && this.state.windowWidth < 768) {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar style={{
                    transform: this.state.offsetY > 100 && `translate(0, ${this.state.slide})`,
                    transition: this.state.offsetY > 100 ? 'transform 0.2s linear' : 'all 0.5s ease',
                    zIndex: 4,
                }}
                    expand="md" dark className={this.state.offsetY > 100 ? ` fixed-top bg-light` : 'fixed-top bg-light'}
                >
                    <NavbarToggler onClick={this.toggle} className='border-0 mt-2 float-right'>
                        <HamburgerMenu
                            isOpen={this.state.isOpen}
                            navbar
                            menuClicked={this.toggle}
                            borderRadi={0}
                            animationDuration={0.5}
                        />
                    </NavbarToggler>
                    <NavbarBrand href='/' className='text-dark mx-auto brand font-weight-bold'>
                        {/* <i className="fas fa-tree rounded-circle px-2 py-1 bg-dark text-light "></i> */}
                        <img className='kangaroo' src={kangaroo} alt='logo' />
                        Australia

                    </NavbarBrand>

                    <Collapse isOpen={this.state.isOpen} navbar className='text-center'>
                        <Nav className="mx-auto font-weight-bold" navbar>
                            <NavItem>
                                <NavLink
                                    onClick={() => {
                                        this.toggle();
                                    }}
                                    className='text-dark '
                                    href='#'
                                >
                                    PARKS
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => {
                                        this.toggle();
                                    }}
                                    className='text-dark '
                                    href='#'
                                >
                                    SHOP
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => {
                                        this.toggle();
                                    }}
                                    className='text-dark '
                                    href='#'
                                >
                                    OUR STORY
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => {
                                        this.toggle();
                                    }}
                                    className='text-dark '
                                    href='#'
                                >
                                    GET INVOLVED
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    onClick={() => {
                                        this.toggle();
                                    }}
                                    className='text-dark '
                                    href='#'
                                >
                                    NEWS
                                    </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                    <div className='mr-2'>
                        <i className="fas fa-search pr-3 nav-icons"></i>
                        <i className="far fa-user-circle pr-3 nav-icons"></i>
                        <i className="fas fa-shopping-cart nav-icons"></i>
                    </div>

                </Navbar>
            </div>
        )
    }
}
export default NavBar