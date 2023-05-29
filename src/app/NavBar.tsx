'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

export default function NavBar() {
  const pathname = usePathname()

  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          NextJS 13.4 image gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav>
            <Nav.Link as={Link} href="/static" active={pathname === '/static'}>
              Static
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/dynamic"
              active={pathname === '/dynamic'}
            >
              Dynamic
            </Nav.Link>

            <Nav.Link as={Link} href="/isr" active={pathname === '/isr'}>
              Isr
            </Nav.Link>
            <NavDropdown title="Topics" id="topics-dropdown">
              <NavDropdown.Item as={Link} href="/topics/cats">
                Cats
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/dogs">
                Dogs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/birds">
                Birds
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/search" active={pathname === '/search'}>
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
