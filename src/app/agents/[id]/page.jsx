'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { getAgent } from '@/actions/agents';
import styles from './agentdetals.module.css';
import Image from 'next/image';

const DetailsAgent = (props) => {
  const [agent, setAgent] = useState([]);
  const [loading, setLoading] = useState(true);

  const { params } = props;
  console.log(params);

  const getAgentDetails = async () => {
    const agent = await getAgent(params.id);
    if (agent.success) {
      setAgent(agent.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAgentDetails();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Image src={agent.fullPortrait} width={600} height={600} />
      <div className={styles.details}>
        <h1>{agent.displayName}</h1>
        <p>{agent.role.displayName}</p>
        <div>
          {agent.abilities.map((ability) => (
            <div key={ability.uuid} className={styles.ability}>
              <Image src={ability.displayIcon} width={50} height={50} />
              <h4>{ability.displayName}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsAgent;
