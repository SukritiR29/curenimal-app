interface AnimalData {
  [animal: string]: {
  [problem: string]: string | string[];
  };
}

export const animalData = {
  Dog: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Carefully inspect your dog's skin for signs of redness, swelling, rashes, bumps, lumps, or any abnormalities. Look for evidence of fleas, ticks, or other parasites.",
        "Step 2: Try to identify any potential causes of the skin problem, such as recent changes in diet, exposure to new substances, or contact with irritants.",
        "Step 3: Clean the affected area with a mild, pet-safe shampoo or a gentle cleanser recommended by your veterinarian. Avoid using human shampoos, as they may contain ingredients that are harmful to dogs.",
        "Step 4: Prevent your dog from licking or scratching the affected area excessively, as this can worsen the condition. Consider using an Elizabethan collar if necessary.",
        "Step 5: If the skin problem persists, worsens, or if you are unsure of the cause, seek professional veterinary advice. Your veterinarian can perform a thorough examination, conduct tests if necessary, and prescribe appropriate medications or treatments."]
      },
      {
        name: "Wounded",
        content: ["Step 1: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: If the dog is conscious and alert, gently restrain it to prevent further injury to itself or to you. Use a leash, belt, or other materials available.. ",
        "Step 3: Even a normally friendly dog may bite when in pain. If possible, use a soft fabric, such as a bandage or cloth, to create a makeshift muzzle. Ensure it allows the dog to breathe comfortably.",
        "Step 4: Identify and control any bleeding. Apply direct pressure with a clean cloth, gauze, or your hand. Elevate the wounded area if possible, but avoid elevating if it causes more pain.",
         "Step 5: If there are foreign objects in the wound, do not attempt to remove them. Clean around the wound with mild soap and water or a saline solution. Avoid using hydrogen peroxide or alcohol as they can be irritating.",
        "Step 6: Apply a pet-safe antiseptic or antibiotic ointment to the wound to help prevent infection.",
        "Step 7: Use a clean bandage or gauze to cover the wound. Secure it in place with a bandage or tape. Ensure it's not too tight to impede circulation.",
        "Step 8: Contact your veterinarian or emergency animal clinic for guidance and let them know you are on your way."]
      },
      {
        name: "New Born",
        content: ["Step 1: Keep the puppy in a warm and draft-free area. Use a cozy bed or blanket to provide comfort.",
        "Step 2: Always have fresh water available for the puppy. Monitor water intake to ensure they stay adequately hydrated.",
        "Step 3: Establish a regular feeding schedule and monitor the puppy's weight to ensure proper growth.",
        "Step 4: Watch for any signs of illness, discomfort, or abnormal behavior. If you notice anything concerning, consult your veterinarian.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: Watch for signs of distress such as vomiting, diarrhea, lethargy, bloated abdomen, excessive drooling, or difficulty breathing.",
        "Step 2: It may be advisable to withhold food for 12-24 hours, allowing the dog's stomach to settle. However, consult with your vet before making this decision.",
        "Step 3: Ensure your dog has access to clean, fresh water. Dehydration can be a concern with vomiting and diarrhea, so encourage your dog to drink but don't force it.",
        "Step 4: Do not administer any over-the-counter medications without consulting your veterinarian first, as some human medications can be toxic to dogs.",
        "Step 5: Call your veterinarian or emergency veterinary clinic immediately for guidance. Provide as much information as possible about your dog's symptoms and any recent changes in diet or environment."]
      },
    ]
  },

  Cat: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Approach the cat calmly and speak in a soothing tone. Cats may become frightened or aggressive when in pain.",
        "Step 2: Keep the cat as still as possible to prevent further injury. If the cat is willing, gently place it in a carrier or a secure, well-padded box for transport.",
        "Step 3: If possible, you can provide support to the broken limb by gently splinting it. Use a rigid material like a piece of cardboard or rolled-up newspaper, making sure not to put pressure directly on the injured area.",
        "Step 4: Immediately take the cat to the veterinarian. Call ahead to let them know you're coming, so they can be prepared for the arrival of an injured animal.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.Carefully examine the affected area of the cat's skin. Look for signs of redness, swelling, cuts, abrasions, lumps, or any discharge.",
        "Step 2: Gently clean the affected area with a mild, pet-safe antiseptic solution. You can use a clean, damp cloth or cotton ball for this purpose. Identify and remove any potential irritants, such as chemicals, plants, or substances that may have come into contact with the cat's skin. ",
        "Step 3: If possible, prevent the cat from excessively licking or scratching the affected area. You may use a cone (Elizabethan collar) to prevent them from reaching the spot.",
        "Step 4: Work with your veterinarian to identify and address any underlying causes of the skin problem. This may involve allergy testing, dietary changes, or other diagnostic measures.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Approach the cat calmly and speak to them in a soothing tone. Cats can sense stress, and staying calm helps to keep them relaxed.",
        "Step 2: If the wound is causing pain or distress, consider using a soft towel or blanket to gently restrain the cat, especially if you need to examine or clean the wound. ",
        "Step 3: Carefully examine the wound to determine its size, depth, and if there are any foreign objects lodged in it. Be cautious, as even a usually calm cat may react defensively when in pain. Wash your hands thoroughly before handling the wound to avoid introducing bacteria.",
        "Step 4: If the wound is dirty, gently clean it with mild, lukewarm saline solution or an antiseptic solution recommended by your veterinarian. Avoid using hydrogen peroxide or alcohol, as they can be too harsh and may delay healing.If there is bleeding, apply gentle pressure with a clean cloth or sterile gauze pad. Elevate the wound if possible to help reduce blood flow.",
        "Step 5: If the wound is in an area where a bandage can be applied and the cat will tolerate it, carefully wrap the wound with a sterile bandage. Be sure not to make it too tight. ",
        "Step 6: If your cat seems to be in pain, discuss with your veterinarian the possibility of pain management options appropriate for feline use."]
      },
      {
        name: "New Born",
        content: ["Step 1: Keep the kitten in a warm, quiet, and safe place. Use a comfortable bed or blanket to provide warmth.",
        "Step 2: If the mother cat is not present or unable to nurse, consult with a veterinarian for guidance on a suitable milk replacement formula. Feed the kitten using a small bottle or syringe, following the recommended feeding schedule.",
        "Step 3:Newborn kittens require frequent feedings, usually every 2-4 hours. As they grow, the feeding frequency can be gradually reduced.",
        "Step 4: Gently stimulate the kitten's genital area with a soft cloth after each feeding to mimic the mother's grooming behavior and encourage elimination.",
        "step 5: Newborn kittens cannot regulate their body temperature well. Ensure they are kept in a warm environment (around 85-90°F or 29-32°C) until they are about 3 weeks old.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: Withhold food for 12-24 hours to give the cat's stomach a chance to settle. However, consult with a vet before making such decisions, as some conditions may require different approaches.",
        "Step 2: Ensure the cat has access to fresh water. If dehydration is a concern, try to encourage the cat to drink small amounts of water at a time.",
        "Step 3: Do not administer over-the-counter medications without consulting your veterinarian, as some human medications can be toxic to cats.",
        "Step 4: Contact your veterinarian as soon as possible. Stomach infections can be caused by various factors, including bacteria, viruses, or parasites, and the appropriate treatment will depend on the underlying cause.",]
      },
    ]
  },

  Cow: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Keep yourself and others safe. Cows can be unpredictable, especially if they are in pain.",
        "Step 2:If possible, try to keep the cow calm and still. Excessive movement can worsen the injury.",
        "Step 3: Create a quiet and comfortable space for the cow to lie down. Soft bedding can help reduce the impact on the injured area.",
        "Step 4: Do not attempt to set the broken bone yourself. This is a job for a trained veterinarian to avoid causing further damage.",
        "Step 5: Keep the area around the broken bone clean to prevent infection. Do not apply any ointments or dressings without veterinary guidance."]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Separate the affected cow from the rest of the herd to prevent the potential spread of any contagious skin conditions.",
        "Step 2:Examine the affected area carefully. Note any signs of swelling, redness, wounds, lesions, hair loss, or abnormal growths. Gently clean the affected skin using a mild antiseptic solution or plain warm water. Avoid using harsh chemicals that could worsen the condition.",
        "Step 3: Protect the cow from harsh weather conditions, such as extreme cold or heat, as these can exacerbate skin problems.        ",
        "Step 4: If the cow appears to be in pain, consult with a veterinarian about appropriate pain relief options.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure your safety and the safety of others. Calm the cow and create a safe and quiet environment to reduce stress.",
        "Step 2: If necessary, safely restrain the cow to prevent further injury to itself or others. Use appropriate equipment and techniques. ",
        "Step 3: Examine the wound carefully to determine its size, depth, and severity. Look for signs of infection, foreign objects, or excessive bleeding.",
        "Step 4: If the wound is bleeding, apply direct pressure using a clean cloth, gauze, or bandage. Elevate the wounded area if possible.",
        "Step 5: Gently clean the wound with a mild antiseptic solution or saline solution. Avoid using harsh chemicals or substances that may cause further irritation.",
        "Step 6: After cleaning, apply an antiseptic ointment to help prevent infection. Follow the product instructions and use as directed by your veterinarian."]
      },
      {
        name: "New Born",
        content: ["Step 1: Provide the calf with colostrum, the first milk produced by the mother cow. Colostrum is rich in antibodies and essential nutrients crucial for the calf's immune system. Ensure the calf receives colostrum within the first few hours of birth.",
        "Step 2: If the calf is not nursing, bottle-feed it with a milk replacer or whole milk. Consult with a veterinarian for guidance on the appropriate formula and feeding schedule.",
        "Step 3: Establish a regular feeding schedule. Calves generally need to be fed multiple times a day, especially in the early weeks of life.",
        "Step 4: Ensure the calf has access to a clean and dry shelter. Protection from extreme weather conditions, such as rain and cold, is crucial.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: If possible, separate the cow from the herd to prevent injury to itself or others. Take note of any symptoms such as abdominal discomfort, bloating, or signs of distress.",
        "Step 2: Ensure the cow has access to clean and fresh water. Dehydration can worsen the condition.",
        "Step 3: Keep an eye on the cow's breathing. Labored breathing or signs of respiratory distress could indicate more severe conditions like bloat.",
        "Step 4: If the cow is able to move, encourage mild exercise to promote digestion and reduce the risk of bloat.",]
      },
    ]
  },

  Bird: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Move slowly and calmly to avoid causing additional stress to the bird. Limit handling to reduce stress and potential exacerbation of the injury",
        "Step 2:Use a small, well-ventilated container or carrier lined with a soft, non-abrasive material such as a towel or cloth. Ensure the container is secure to prevent further injury.",
        "Step 3: Place the container in a warm and quiet area to help keep the bird calm and maintain its body temperature.",
        "Step 4: It's essential not to try to set the broken bone yourself, as this can cause further harm. Leave the assessment and treatment to a qualified avian veterinarian.",
        "Step 5: Minimize the bird's movement to prevent further injury. If possible, avoid any sudden or jarring movements during transportation.",
        "Step 7: If the bird has a broken wing, gently support the wing against its body during transportation."]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: If you have multiple birds, isolate the one with the skin problem to prevent the spread of any potential contagious condition.",
        "Step 2: Examine the affected area carefully. Note any signs of redness, swelling, discharge, feather loss, or abnormalities. ",
        "Step 3: If necessary, gently restrain the bird to prevent further injury or self-harm. Use a soft towel or cloth to wrap around the bird, being careful not to stress it further.",
        "Step 4: Refrain from applying any topical treatments or medications without veterinary guidance. Some substances may be harmful to birds.",
        "Step 5: Take note of any changes in the bird's behavior, appetite, or other symptoms. This information can be helpful for the veterinarian's assessment.",
        "Step 6: Refrain from attempting to diagnose or treat the skin problem on your own. Birds can have various skin conditions, and a professional diagnosis is crucial."]
      },
      {
        name: "Wounded",
        content: ["Step 1: Approach the bird slowly and calmly to avoid causing additional stress. If you must handle the bird, use gloves to protect yourself from potential bites or scratches. Keep in mind that some birds may carry diseases.",
        "Step 2: Gently place the injured bird in a well-ventilated and secure container, such as a cardboard box with air holes or a pet carrier. Line the container with a soft cloth or paper towels. Place the container in a warm, quiet, and dark place. This helps reduce stress for the bird.",
        "Step 3: Do not attempt to force-feed the bird. Allow it to rest and recover. If the bird appears alert and able to drink, provide a shallow dish of water. Do not force the bird to drink.",
        "Step 4: Unless you have specific training in bird rehabilitation, it's best to leave the care of the bird to professionals.",]
      },
      {
        name: "New Born",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
    ]
  },

  Goat: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Keep yourself and others safe. Goats can be unpredictable, especially if they are in pain.",
        "Step 2:If possible, try to keep the Goat calm and still. Excessive movement can worsen the injury.",
        "Step 3: Create a quiet and comfortable space for the Goat to lie down. Soft bedding can help reduce the impact on the injured area.",
        "Step 4: Do not attempt to set the broken bone yourself. This is a job for a trained veterinarian to avoid causing further damage.",
        "Step 5: Keep the area around the broken bone clean to prevent infection. Do not apply any ointments or dressings without veterinary guidance."]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Separate the affected Goat from the rest of the herd to prevent the potential spread of any contagious skin conditions.",
        "Step 2:Examine the affected area carefully. Note any signs of swelling, redness, wounds, lesions, hair loss, or abnormal growths. Gently clean the affected skin using a mild antiseptic solution or plain warm water. Avoid using harsh chemicals that could worsen the condition.",
        "Step 3: Protect the Goat from harsh weather conditions, such as extreme cold or heat, as these can exacerbate skin problems.        ",
        "Step 4: If the Goat appears to be in pain, consult with a veterinarian about appropriate pain relief options.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure your safety and the safety of others. Calm the Goat and create a safe and quiet environment to reduce stress.",
        "Step 2: If necessary, safely restrain the Goat to prevent further injury to itself or others. Use appropriate equipment and techniques. ",
        "Step 3: Examine the wound carefully to determine its size, depth, and severity. Look for signs of infection, foreign objects, or excessive bleeding.",
        "Step 4: If the wound is bleeding, apply direct pressure using a clean cloth, gauze, or bandage. Elevate the wounded area if possible.",
        "Step 5: Gently clean the wound with a mild antiseptic solution or saline solution. Avoid using harsh chemicals or substances that may cause further irritation.",
        "Step 6: After cleaning, apply an antiseptic ointment to help prevent infection. Follow the product instructions and use as directed by your veterinarian."]
      },
      {
        name: "New Born",
        content: ["Step 1: Provide the baby goat with colostrum, the first milk produced by the mother Goat. Colostrum is rich in antibodies and essential nutrients crucial for the goat's immune system. Ensure the baby goat receives colostrum within the first few hours of birth.",
        "Step 2: If the baby is not nursing, bottle-feed it with a milk replacer or whole milk. Consult with a veterinarian for guidance on the appropriate formula and feeding schedule.",
        "Step 3: Establish a regular feeding schedule. Baby Goats generally need to be fed multiple times a day, especially in the early weeks of life.",
        "Step 4: Ensure the goat has access to a clean and dry shelter. Protection from extreme weather conditions, such as rain and cold, is crucial.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: If possible, separate the Goat from the herd to prevent injury to itself or others. Take note of any symptoms such as abdominal discomfort, bloating, or signs of distress.",
        "Step 2: Ensure the Goat has access to clean and fresh water. Dehydration can worsen the condition.",
        "Step 3: Keep an eye on the Goat's breathing. Labored breathing or signs of respiratory distress could indicate more severe conditions like bloat.",
        "Step 4: If the Goat is able to move, encourage mild exercise to promote digestion and reduce the risk of bloat.",]
      },
    ]
  },

  Sheep: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Keep yourself and others safe. Sheeps can be unpredictable, especially if they are in pain.",
        "Step 2:If possible, try to keep the Sheep calm and still. Excessive movement can worsen the injury.",
        "Step 3: Create a quiet and comfortable space for the Sheep to lie down. Soft bedding can help reduce the impact on the injured area.",
        "Step 4: Do not attempt to set the broken bone yourself. This is a job for a trained veterinarian to avoid causing further damage.",
        "Step 5: Keep the area around the broken bone clean to prevent infection. Do not apply any ointments or dressings without veterinary guidance."]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Separate the affected Sheep from the rest of the herd to prevent the potential spread of any contagious skin conditions.",
        "Step 2:Examine the affected area carefully. Note any signs of swelling, redness, wounds, lesions, hair loss, or abnormal growths. Gently clean the affected skin using a mild antiseptic solution or plain warm water. Avoid using harsh chemicals that could worsen the condition.",
        "Step 3: Protect the Sheep from harsh weather conditions, such as extreme cold or heat, as these can exacerbate skin problems.        ",
        "Step 4: If the Sheep appears to be in pain, consult with a veterinarian about appropriate pain relief options.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure your safety and the safety of others. Calm the Sheep and create a safe and quiet environment to reduce stress.",
        "Step 2: If necessary, safely restrain the Sheep to prevent further injury to itself or others. Use appropriate equipment and techniques. ",
        "Step 3: Examine the wound carefully to determine its size, depth, and severity. Look for signs of infection, foreign objects, or excessive bleeding.",
        "Step 4: If the wound is bleeding, apply direct pressure using a clean cloth, gauze, or bandage. Elevate the wounded area if possible.",
        "Step 5: Gently clean the wound with a mild antiseptic solution or saline solution. Avoid using harsh chemicals or substances that may cause further irritation.",
        "Step 6: After cleaning, apply an antiseptic ointment to help prevent infection. Follow the product instructions and use as directed by your veterinarian."]
      },
      {
        name: "New Born",
        content: ["Step 1: Provide the Baby Sheep with colostrum, the first milk produced by the mother Sheep. Colostrum is rich in antibodies and essential nutrients crucial for the Baby Sheep's immune system. Ensure the Baby Sheep receives colostrum within the first few hours of birth.",
        "Step 2: If the Baby Sheep is not nursing, bottle-feed it with a milk replacer or whole milk. Consult with a veterinarian for guidance on the appropriate formula and feeding schedule.",
        "Step 3: Establish a regular feeding schedule. Baby Sheep generally need to be fed multiple times a day, especially in the early weeks of life.",
        "Step 4: Ensure the Baby Sheep has access to a clean and dry shelter. Protection from extreme weather conditions, such as rain and cold, is crucial.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: If possible, separate the Sheep from the herd to prevent injury to itself or others. Take note of any symptoms such as abdominal discomfort, bloating, or signs of distress.",
        "Step 2: Ensure the Sheep has access to clean and fresh water. Dehydration can worsen the condition.",
        "Step 3: Keep an eye on the Sheep's breathing. Labored breathing or signs of respiratory distress could indicate more severe conditions like bloat.",
        "Step 4: If the Goat is able to move, encourage mild exercise to promote digestion and reduce the risk of bloat.",]
      },
    ]
  },

  Monkey: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "New Born",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
    ]
  },

  Elephant: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "New Born",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
    ]
  },

  Pig: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "New Born",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
    ]
  },

  Rabbit: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "New Born",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
    ]
  },

  Squirrel: {
    problems: [
      {
        name: "Broken Bone",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Skin Problem",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Wounded",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "New Born",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
      {
        name: "Stomach Infection",
        content: ["Step 1: Ensure Safety: Approach the dog calmly and avoid sudden movements to prevent further distress. Use a muzzle if necessary to prevent the dog from biting in pain, but be cautious not to restrict its ability to breathe or open its mouth.",
        "Step 2: Assess the Situation: Examine the dog's body carefully, but avoid causing additional pain or injury. Look for signs of a broken bone, such as swelling, deformity, or the dog's unwillingness to put weight on a limb. Keep in mind that some fractures may not be obvious, and it's essential to rely on a veterinarian's expertise. ",
        "Step 3: Immobilize the affected area with a splint if possible.",
        "Step 4: Seek veterinary help immediately.",]
      },
    ]
  },
}