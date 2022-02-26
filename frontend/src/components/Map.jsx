import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import {
  Popover,
  Button,
  Dialog,
  Select,
  TextInput,
  Modal,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";

const Marker = ({ color, children }) => {
  const [opened2, setOpened2] = useState(false);

  return (
    <>
      <svg
        onClick={() => setOpened2((o) => !o)}
        width="24"
        height="24"
        style={{
          cursor: "pointer",
          fill: color,
        }}
      >
        <circle cx="12" cy="12" r="10" />
      </svg>

      <Dialog
        opened={opened2}
        withCloseButton
        onClose={() => setOpened2(false)}
      >
        {children}
      </Dialog>
    </>
  );
};

const Map = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState({
    lat: "",
    lng: "",
  });

  const form = useForm({
    initialValues: {
      type: "",
    },
  });

  const defaultProps = {
    center: {
      lat: 10.963889,
      lng: -74.796387,
    },
    zoom: 7,
  };

  return (
    <>
      <Modal opened={opened} title="Add a new COVID case">
        <form
          onSubmit={form.onSubmit((values) => {
            values.lng = selected.lng;
            values.lat = selected.lat;
            values.date = new Date();
            console.log(values);
          })}
        >
          <TextInput
            placeholder={selected.lat}
            value={selected.lat}
            label="Latitude"
            disabled
            required
          />
          <TextInput
            placeholder={selected.lng}
            value={selected.lng}
            label="Longitude"
            disabled
            required
          />
          <Select
            {...form.getInputProps("type")}
            required
            label="COVID disease status"
            placeholder="Pick one"
            data={[
              { value: "asymptomatic", label: "Asymptomatic" },
              { value: "symptomatic", label: "Symptomatic" },
              { value: "hospitalized", label: "Hospitalized" },
              { value: "dead", label: "Dead" },
            ]}
          />
          <Button
            type="submit"
            style={{
              marginTop: "1rem",
            }}
            color="pink"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Modal>

      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          onClick={(e) =>
            setSelected({
              lat: e.lat,
              lng: e.lng,
            })
          }
          bootstrapURLKeys={{ key: "AIzaSyDX5b2eROUXhaHcVDNiX4yAnipp3d7898Q" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {selected && (
            <Marker color="gray" lat={selected.lat} lng={selected.lng}>
              <Button onClick={() => setOpened(true)} color="pink">
                Add patient
              </Button>
            </Marker>
          )}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
