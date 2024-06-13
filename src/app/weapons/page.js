'use client';
import { getWeapons } from '@/actions/weapons';
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './weapons.module.css';
import Link from 'next/link';

const weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getWeaponList = async () => {
    const weapons = await getWeapons();
    if (weapons.success) {
      setWeapons(weapons.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeaponList();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1>Weapons</h1>
      <div className={styles.gridList}>
        {weapons.map((weapon) => (
          <Link
            key={weapon.uuid}
            className={styles.item}
            href={`/weapons/${weapon.uuid}`}
          >
            <Image
              src={weapon.displayIcon}
              alt={weapon.displayName}
              width={400}
              height={100}
            />
            <h3>{weapon.displayName}</h3>
            <p>{weapon.category.replace('EEquippableCategory::', '')}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default weapons;
