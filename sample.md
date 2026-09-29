# highlight sample

tmdview colors these itself:

```rust
fn main() { println!("hi"); }
```

This plugin colors these:

```typescript
interface User { id: number; name?: string }
const greet = (u: User): string => `hi ${u.name ?? "there"}`;
```

```kotlin
data class User(val id: Int, val name: String?)
```

```dockerfile
FROM rust:1.90 AS build
RUN cargo build --release
```

Unknown to both, so it stays plain:

```nope
<just text>
```
