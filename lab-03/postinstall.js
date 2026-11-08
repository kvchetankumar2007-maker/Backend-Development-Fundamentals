const { execSync } = require('child_process');

// On Linux environments (like Render hosting), prebuilt sqlite3 binaries
// may require GLIBC_2.38 which causes runtime loader errors on hosts with older GLIBC.
// Rebuilding sqlite3 from source binds it directly to the host's native GLIBC.
if (process.platform === 'linux') {
  console.log('[postinstall] Linux environment detected. Rebuilding sqlite3 from source...');
  try {
    execSync('npm rebuild sqlite3 --build-from-source', { stdio: 'inherit' });
    console.log('[postinstall] sqlite3 rebuilt from source successfully.');
  } catch (error) {
    console.error('[postinstall] Warning: Failed to rebuild sqlite3 from source:', error.message);
  }
} else {
  console.log(`[postinstall] Platform is '${process.platform}'. Prebuilt binaries will be used.`);
}
