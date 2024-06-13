'use client';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMaps } from '@/actions/maps';
import Image from 'next/image';
import Link from 'next/link';
import styles from './maps.module.css';

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMapList = async () => {
    const maps = await getMaps();
    if (maps.success) {
      setMaps(maps.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMapList();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1>Maps</h1>
      <div className={styles.girdList}>
        {maps.map((map) => (
          <Link
            key={map.uuid}
            href={`/maps/${map.uuid}`}
            className={styles.card}
          >
            <h3>{map.displayName}</h3>
            <Image
              src={map.listViewIcon}
              alt={map.displayName}
              width={400}
              height={100}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Maps;
