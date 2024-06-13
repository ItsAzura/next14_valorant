'use client';
import { getWeapon } from '@/actions/weapons';
import React, { useEffect, useState } from 'react';
import styles from './weapondetals.module.css';
import Image from 'next/image';

const WeaponsDetails = (props) => {
  const [weapon, setWeapon] = useState([]);
  const [loading, setLoading] = useState(true);

  const { params } = props;
  console.log(params);

  const getWeaponDetails = async () => {
    const weapon = await getWeapon(params.id);
    if (weapon.success) {
      setWeapon(weapon.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeaponDetails();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1>{weapon.displayName}</h1>
      <p>{weapon.category.replace('EEquippableCategory::', '')}</p>
      <Image
        src={weapon.displayIcon}
        alt={weapon.displayName}
        width={600}
        height={220}
      />
      <div className={styles.details}>
        <p>Fire Rate: {weapon?.weaponStats?.fireRate}</p>
        <p>Magazine Size: {weapon?.weaponStats?.magazineSize}</p>
        <p>Run Speed Multiplier: {weapon?.weaponStats?.runSpeedMultiplier}</p>
        <p>Equip Time (Seconds): {weapon?.weaponStats?.equipTimeSeconds}</p>
        <p>Reload Time (Seconds): {weapon?.weaponStats?.reloadTimeSeconds}</p>
        <p>First Bullet Accuracy: {weapon?.weaponStats?.firstBulletAccuracy}</p>
        <p>Shotgun Pellet Count: {weapon?.weaponStats?.shotgunPelletCount}</p>
        <p>
          Wall Penetration:{' '}
          {weapon?.weaponStats?.wallPenetration.replace(
            'EWallPenetrationDisplayType::',
            ''
          )}
        </p>
      </div>
    </div>
  );
};

export default WeaponsDetails;
