import React, { Suspense } from 'react'
// host-app/src/App.jsx

// This corresponds to remote-app exposes: { './ProfilePage': './src/pages/Profile.jsx' }
const RemoteProfilePage = React.lazy(() => import('remote_app/ProfilePage'))

export default function App() {
  const userFromHost = {
    name: 'Vignesh from Host',
    email: 'vignesh.host@example.com',
    role: 'Admin'
  }

  return (
    <div style={{ padding: '1rem', border: '2px solid #ccc' }}>
      <h1>Host App</h1>
      <p>
        Below is the <strong>Profile page</strong> rendered from the remote app,
        but with <code>userInfo</code> provided by the host.
      </p>

      <Suspense fallback={<div>Loading remote profile…</div>}>
        <RemoteProfilePage userInfo={userFromHost} />
      </Suspense>
    </div>
  )
}
