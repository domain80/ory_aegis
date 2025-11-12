import type {
    UiNode,
    UiNodeAnchorAttributes,
    UiNodeAttributes,
    UiNodeDivisionAttributes,
    UiNodeImageAttributes,
    UiNodeInputAttributes,
    UiNodeScriptAttributes,
    UiNodeTextAttributes,
} from '@ory/client'
import { h, type VNode } from 'vue'

// ---------- Type Guards (correct form) ----------
function isInputNode(
    attr: UiNodeAttributes
): attr is { node_type: 'input' } & UiNodeInputAttributes {
    return attr.node_type === 'input'
}

function isAnchorNode(
    attr: UiNodeAttributes
): attr is { node_type: 'a' } & UiNodeAnchorAttributes {
    return attr.node_type === 'a'
}

function isImageNode(
    attr: UiNodeAttributes
): attr is { node_type: 'img' } & UiNodeImageAttributes {
    return attr.node_type === 'img'
}

function isTextNode(
    attr: UiNodeAttributes
): attr is { node_type: 'text' } & UiNodeTextAttributes {
    return attr.node_type === 'text'
}

function isDivisionNode(
    attr: UiNodeAttributes
): attr is { node_type: 'div' } & UiNodeDivisionAttributes {
    return attr.node_type === 'div'
}

function isScriptNode(
    attr: UiNodeAttributes
): attr is { node_type: 'script' } & UiNodeScriptAttributes {
    return attr.node_type === 'script'
}

// ---------- Single Node Parser ----------
export function parseNode(node: UiNode): VNode {
    const attr = node.attributes
    const label = node.meta?.label?.text
    const messages = node.messages?.map((m) => m.text).join(', ') || ''

    if (isInputNode(attr)) {
        return h('div', { class: 'ory-node ory-node--input' }, [
            label ? h('label', { for: attr.name }, label) : null,
            h('input', {
                id: attr.name,
                name: attr.name,
                type: attr.type,
                value: attr.value,
                autocomplete: attr.autocomplete,
                required: attr.required,
                disabled: attr.disabled,
            }),
            messages ? h('small', { class: 'ory-node-message' }, messages) : null,
        ])
    }

    if (isAnchorNode(attr)) {
        return h('a', { href: attr.href, id: attr.id }, label || attr.href)
    }

    if (isImageNode(attr)) {
        return h('figure', { class: 'ory-node ory-node--image' }, [
            h('img', {
                id: attr.id,
                src: attr.src,
                width: attr.width,
                height: attr.height,
            }),
            label ? h('figcaption', label) : null,
        ])
    }

    if (isTextNode(attr)) {
        return h('p', { id: attr.id, class: 'ory-node ory-node--text' }, attr.text.text)
    }

    if (isScriptNode(attr)) {
        return h('script', { id: attr.id, src: attr.src })
    }

    if (isDivisionNode(attr)) {
        return h('div', { id: attr.id, class: 'ory-node ory-node--div' })
    }

    return h(
        'div',
        { class: 'ory-node ory-node--unsupported' },
        `Unsupported node type:`
    )
}

// ---------- Full Flow Parser ----------
export function parseFlow(nodes?: UiNode[]): VNode[] {
    if (!nodes) return []
    return nodes.map((node) => parseNode(node))
}
