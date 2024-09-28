// src/components/UserProfile.js
import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  Divider,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UserProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [expanded, setExpanded] = useState(false);

  const handleUpdateProfile = () => {
    if (!firstName || !lastName || !email || !phone) {
      setSnackbarMessage('All fields are required.');
      setOpenSnackbar(true);
      return;
    }

    setSnackbarMessage('Profile updated successfully!');
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Set the uploaded image as the photo state
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Profile
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  src={photo}
                  sx={{ width: 100, height: 100, mr: 2 }}
                />
                <Button variant="contained" component="label">
                  Upload Photo
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                </Button>
              </Box>
              <Typography variant="h6">{firstName} {lastName}</Typography>
              <Typography variant="body1">{email}</Typography>
              <Typography variant="body1">{phone}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card variant="outlined">
            <CardHeader
              title="Clothing and Shoes"
              subheader="Size, fit, and price"
              action={
                <IconButton onClick={handleExpandClick}>
                  <ExpandMoreIcon />
                </IconButton>
              }
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      fullWidth
                      margin="normal"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      fullWidth
                      margin="normal"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      fullWidth
                      margin="normal"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone Number"
                      fullWidth
                      margin="normal"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdateProfile}
                  sx={{ mt: 2 }}
                >
                  Update Profile
                </Button>
              </CardContent>
            </Collapse>
          </Card>

          <Divider sx={{ my: 4 }} />

        </Grid>
      </Grid>

      {/* Snackbar for notifications */}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="info">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UserProfile;
