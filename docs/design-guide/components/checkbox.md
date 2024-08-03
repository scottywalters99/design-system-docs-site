---
sidebarDepth: 0
---
# Checkbox

Checkboxes are used to let a user select one or more options of a limited number of choices.

[[TOC]]

## Overview

Checkboxes are used for multiple choices, not for mutually exclusive choices. Each checkbox works independently from other checkboxes in the list, therefore checking an additional box does not affect any other selections.

::: tip
[Radio buttons](/design-guide/components/radio) are similar to checkboxes, but with an important distinction — radio buttons are grouped into a set in which only **one** radio button can be selected at a time, whereas whereas checkboxes allow multiple values to be selected at the same time.
:::

## When to use

## When not to use

## Live demo

<checkbox />

## Code

```html
<template>
  <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: "not_accepted",
      };
    },
  };
</script>
```

## Formatting

## Anatomy

## Alignment

## Content

Group labels

Checkbox labels

Overflow content

## Behaviors

## State

![Checkbox selected](/images/design-guide/components/checkbox/checkbox-state-selected@4.png)

## References

W3schools.com. 2020. [HTML Input Type="Checkbox".](https://www.w3schools.com/tags/att_input_type_checkbox.asp)

Developer.mozilla.org. 2020. Input Type Checkbox - HTML: Hypertext Markup Language | MDN. [online](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
