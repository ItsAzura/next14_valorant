'use client';
import Image from 'next/image';
import styles from './agents.module.css';
import { useEffect, useState } from 'react';
import { getAgents } from '@/actions/agents';
import Link from 'next/link';

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAgentsList = async () => {
    const agents = await getAgents();
    if (agents.success) {
      setAgents(agents.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAgentsList();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1>Agents</h1>
      <div className={styles.grid}>
        {agents.map((agent) => (
          <Link
            key={agent.uuid}
            className={styles.card}
            href={`./agents/${agent.uuid}`}
          >
            <Image
              src={agent.displayIcon}
              alt={agent.displayName}
              width={200}
              height={200}
            />
            <h3>{agent.displayName}</h3>
            <p>{agent.role?.displayName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
