// import logo from './logo.svg';
import * as mui from '@mui/material';

function App() {
  return (
    <mui.Box style={
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
        color: 'white',
      }
    }>
      <div
      // center the content
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      >
        <mui.TextField
          id="NameField"
          label="What's your name?"
          variant="outlined"
          sx={{ m: 1, width: '30ch' }}
          onClick={() => console.log('clicked')}
          color="secondary"
          />
      </div>
    </mui.Box>
  );
}

export default App;
