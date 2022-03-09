import { useState } from "react";
import {
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Paper,
} from "@mui/material";
import {
  AddShoppingCart,
  AddAPhotoOutlined,
  HomeRounded,
  ContactMailTwoTone,
  MailSharp,
  Folder,
  Restore,
  Favorite,
  LocationOn,
} from "@mui/icons-material";

function Examples() {
  const [value, setValue] = useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Button>hello</Button>
      {/* icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 70,
        }}
      >
        <AddShoppingCart fontSize="large" />
        <AddAPhotoOutlined fontSize="large" />
        <HomeRounded fontSize="large" />
        <ContactMailTwoTone fontSize="large" />
        <MailSharp fontSize="large" />
      </div>
      {/* BottomNavigation */}
      <BottomNavigation
        value={value}
        onChange={handleChange}
        style={{ width: 500, margin: "70px auto" }}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<Restore />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<Favorite />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOn />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<Folder />}
        />
      </BottomNavigation>
      {/* Grid-Papers */}
      <Grid container style={{ width: "90%", margin: "0 auto" }}>
        <Grid item xs={12}>
          <Paper style={{ height: 100, margin: 10 }}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ height: 100, margin: 10 }}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ height: 100, margin: 10 }}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Examples;
