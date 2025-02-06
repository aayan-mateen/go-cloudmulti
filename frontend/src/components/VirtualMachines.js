import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VirtualMachines() {
  const [vms, setVms] = useState([]);
  const [newVm, setNewVm] = useState('');

  useEffect(() => {
    fetchVms();
  }, []);

  const fetchVms = async () => {
    try {
      const response = await axios.get('/api/virtual-machines');
      setVms(response.data);
    } catch (error) {
      console.error('Error fetching virtual machines:', error);
    }
  };

  const createVm = async () => {
    try {
      await axios.post('/api/virtual-machines', { name: newVm });
      setNewVm('');
      fetchVms();
    } catch (error) {
      console.error('Error creating virtual machine:', error);
    }
  };

  const updateVm = async (id, newName) => {
    try {
      await axios.put(`/api/virtual-machines/${id}`, { name: newName });
      fetchVms();
    } catch (error) {
      console.error('Error updating virtual machine:', error);
    }
  };

  const deleteVm = async (id) => {
    try {
      await axios.delete(`/api/virtual-machines/${id}`);
      fetchVms();
    } catch (error) {
      console.error('Error deleting virtual machine:', error);
    }
  };

  return (
    <div>
      <h2>Manage Virtual Machines</h2>
      <input
        type="text"
        value={newVm}
        onChange={(e) => setNewVm(e.target.value)}
        placeholder="New virtual machine name"
      />
      <button onClick={createVm}>Create Virtual Machine</button>
      <ul>
        {vms.map((vm) => (
          <li key={vm.id}>
            <input
              type="text"
              value={vm.name}
              onChange={(e) => updateVm(vm.id, e.target.value)}
            />
            <button onClick={() => deleteVm(vm.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VirtualMachines;
