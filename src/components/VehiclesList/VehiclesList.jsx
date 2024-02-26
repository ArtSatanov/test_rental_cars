import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchVehicles } from 'services/redux/operations/operations';

export const VehiclesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  return <div>VehiclesList</div>;
};
