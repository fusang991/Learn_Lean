# 用 `intro` 和 `exact` 证明 P → P

```lean
example (P : Prop) : P → P := by
  intro h
  exact h
```

最初的目标是 `⊢ P → P`。`intro h` 把前提引入上下文，此时多了一个假设 `h : P`，目标变成 `⊢ P`。

`exact h` 把 `h` 作为这个目标的证明，因为它的类型恰好就是 `P`。
