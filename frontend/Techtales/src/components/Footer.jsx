export default function Footer() {
    return (
      <footer>
        <p>
          &copy; {new Date().getFullYear()} <a href="https://github.com/tj330" style={{textDecoration: "none", color: "white"}}>tj330</a>. All Rights Reserved.
        </p>
      </footer>
    );
  }