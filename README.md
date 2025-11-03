# Chrome DevTools Documentation

Test Repository: [github.com/ShardenduMishra22/Chrome-Dev-Tool-Learning](https://github.com/ShardenduMishra22/Chrome-Dev-Tool-Learning)

## Settings Panel

### Preferences

Customize DevTools appearance and behavior.

### Workspace

Add folders to edit files directly from DevTools. Changes persist to local filesystem.

### Experiments

Enable and test experimental features before official release.

### Ignore List

Configure files and patterns to hide from Sources panel.

### Devices

Add custom devices or modify existing device profiles for responsive testing.

### Throttling

Create custom network profiles to simulate different connection speeds.

### Locations

Add custom geolocation coordinates for location-based testing.

### Shortcuts

View and modify keyboard shortcuts for DevTools commands.

## Elements Panel

Inspect and modify DOM structure and CSS styles in real-time.

### Source View

- HTML structure inspection
- CSS rule examination
- Live element modification

### Copy Options

**Copy JS Path**: `document.querySelector("selector")`  
**Copy Outer HTML**: Full element markup (e.g., `<button id="action">Click me</button>`)  
**Copy Styles**: All CSS rules applied to selected element

### State Testing

**.hov**: Toggle element pseudo-states (hover, focus, active, visited)  
**.cls**: Add or remove classes dynamically

## Sources Panel

View and edit JavaScript source code with debugging capabilities.

### Debugging Controls

**Resume/Pause**: Continue or halt script execution  
**Step Over**: Execute current line, skip function internals  
**Step Into**: Enter function on current line  
**Step Out**: Exit current function  
**Continue to Here**: Run until cursor position

### Breakpoint Types

**Line Breakpoints**: Pause at specific code line  
**Conditional Breakpoints**: Pause when condition evaluates true  
**DOM Breakpoints**: Pause on subtree modifications, attribute changes, or node removal

### Features

**Stack Trace**: View call stack at breakpoint  
**Trace**: Monitor function calls  
**Breakpoint Management**: Enable, disable, or remove breakpoints

## Command Menu

**Shortcut**: Ctrl + Shift + P (Windows/Linux) or Cmd + Shift + P (macOS)

Search and execute any DevTools command or feature.

## Coverage Tool

Analyze unused JavaScript and CSS code. Access via Command Menu > "Show Coverage".

Identifies dead code to optimize bundle size.

## Changes & Overrides

**Changes**: Track modifications made in DevTools  
**Overrides**: Persist local file changes across page reloads

Enable local overrides to maintain edits after refresh.

## Console Panel

### Methods

`console.log()`: General logging  
`console.warn()`: Warning messages with stack trace  
`console.error()`: Error messages with stack trace  
`console.info()`: Informational messages with stack trace  
`console.debug()`: Debug-level logging  
`console.table()`: Tabular data display  
`console.dir()`: Object property inspection  
`console.group()` / `console.groupEnd()`: Grouped messages  
`console.assert()`: Conditional logging  
`console.clear()`: Clear console output

## **Features**

**Preserve Log**: Maintain console history across page navigation  
**Stack Traces**: Click links to navigate to source code

## Network Panel

Monitor network activity and analyze requests.

### Request Details

**Headers**: Request/response headers and metadata  
**Preview**: Formatted response preview  
**Response**: Raw response data  
**Initiator**: Request origin and call stack  
**Timing**: Request lifecycle breakdown

### Request Types

**XHR**: XMLHttpRequest for frontend-backend communication  
**Fetch**: Modern fetch API requests  
**JS/CSS**: Static resource loading  
**IMG**: Image resources

## Application Panel

Manage storage and application state.

### Storage Types

**Local Storage**: Persists after browser/tab closure  
**Session Storage**: Clears when tab closes  
**Cookies**: HTTP cookies with expiration and domain scope  
**Cache Storage**: Service worker cache  
**IndexedDB**: Client-side database  
**Web SQL**: Deprecated SQL database (legacy support)

### Additional Features

Service Workers, Manifest, Background Services

## Performance Panel

Record and analyze runtime performance.

Captures:

- JavaScript execution time
- Rendering and painting operations
- Layout calculations
- Network activity
- Frame rate and timing

## Lighthouse Panel

Automated auditing tool generating performance reports.

### Audit Categories

- Performance metrics
- Accessibility compliance
- Best practices
- SEO optimization
- Progressive Web App (PWA) checklist

## Security Panel

View security information and certificate details.

Displays:

- HTTPS connection status
- Certificate information
- Mixed content warnings
- Security issues

## Memory Panel

Analyze memory allocation and detect leaks.

### Profiling Options

**Heap Snapshot**: Memory state at specific point  
**Allocation Timeline**: Memory allocation over time  
**Allocation Sampling**: Statistical memory profiling

Used for PWA optimization and memory leak detection.
