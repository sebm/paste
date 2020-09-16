export const showHideExample = `
const ShowHideToast = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <>
      <Button variant="primary" onClick={() => setVisible(false)}>
        Open Toast
      </Button>
      <ToastContainer>
        <Toast hidden={visible} variant="success" onDismiss={() => setVisible(true)}>
          <Text as="div"><strong>Hi!</strong> I am a toast.</Text>
        </Toast>
      </ToastContainer>
    </>
  );
};

render(
  <ShowHideToast />
)
`.trim();
