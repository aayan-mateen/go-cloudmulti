import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sites() {
  const [sites, setSites] = useState([]);
  const [newSite, setNewSite] = useState('');

  useEffect(() => {
    fetchSites();
  }, []);

  const fetchSites = async () => {
    try {
      const response = await axios.get('/api/sites');
      setSites(response.data);
    } catch (error) {
      console.error('Error fetching sites:', error);
    }
  };

  const createSite = async () => {
    try {
      await axios.post('/api/sites', { name: newSite });
      setNewSite('');
      fetchSites();
    } catch (error) {
      console.error('Error creating site:', error);
    }
  };

  const updateSite = async (id, newName) => {
    try {
      await axios.put(`/api/sites/${id}`, { name: newName });
      fetchSites();
    } catch (error) {
      console.error('Error updating site:', error);
    }
  };

  const deleteSite = async (id) => {
    try {
      await axios.delete(`/api/sites/${id}`);
      fetchSites();
    } catch (error) {
      console.error('Error deleting site:', error);
    }
  };

  return (
    <div>
      <h2>Manage Sites</h2>
      <input
        type="text"
        value={newSite}
        onChange={(e) => setNewSite(e.target.value)}
        placeholder="New site name"
      />
      <button onClick={createSite}>Create Site</button>
      <ul>
        {sites.map((site) => (
          <li key={site.id}>
            <input
              type="text"
              value={site.name}
              onChange={(e) => updateSite(site.id, e.target.value)}
            />
            <button onClick={() => deleteSite(site.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sites;
