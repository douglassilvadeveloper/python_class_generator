type FooterProps = {
  text: string;
};

function Footer({ text }: FooterProps) {
  return (
    <footer className="flex flex-row justify-center my-4 p-4">
      <div>{text}</div>
    </footer>
  );
}

export default Footer;
