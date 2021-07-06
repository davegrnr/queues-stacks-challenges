
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function josephusSurvivor(num , skip) {
            // Create a circular linked list of
            // size num.
    let head = new Node(1);
    let prev = head;
            for (i = 2; i <= num; i++) {
                prev.next = new Node(i);
                prev = prev.next;
            }

    // Connect last node to first
    prev.next = head;

    /*
    * while only one node is left in the linked list
    */
    let ptr1 = head, ptr2 = head;

    while (ptr1.next != ptr1) {

        // Find skipped node
        let count = 1;
        while (count != skip) {
            ptr2 = ptr1;
            ptr1 = ptr1.next;
            count++;
        }

        /* Remove the skipped node */
        ptr2.next = ptr1.next;
        ptr1 = ptr2.next;
    }
        return ("Last left standing is " + ptr1.data);
}


